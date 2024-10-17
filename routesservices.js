const express = require('express');
const router = express.Router();
const Service = require('../models/service');

// Add a new service
router.post('/', async (req, res) => {
    const { name, description, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: 'Service name and price are required' });
    }

    try {
        const newService = new Service({ name, description, price });
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Update a service
router.put('/:id', async (req, res) => {
    const { name, description, price } = req.body;
    
    if (!name || !price) {
        return res.status(400).json({ message: 'Service name and price are required' });
    }

    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, 
            { name, description, price }, { new: true });

        if (!updatedService) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json(updatedService);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Delete a service
router.delete('/:id', async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id);

        if (!deletedService) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json({ message: 'Service deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
