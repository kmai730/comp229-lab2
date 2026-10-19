module.exports = (Model) => ({
  getAll: async (req, res) => {
    try {
      const items = await Model.find();

      res.json(items);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },
  getById: async (req, res) => {
    try {
      const item = await Model.findById(req.params.id);
      
      if (!item) return res.status(404).json({ message: 'Not found' });

      res.json(item);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },
  create: async (req, res) => {
    try {
      const newItem = new Model(req.body);
      const saved = await newItem.save();
      res.status(201).json(saved);
    } catch (err) { res.status(400).json({ error: err.message }); }
  },
  update: async (req, res) => {
    try {
      const updated = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!updated) return res.status(404).json({ message: 'Not found' });

      res.json(updated);
    } catch (err) { res.status(400).json({ error: err.message }); }
  },
  remove: async (req, res) => {
    try {
      const deleted = await Model.findByIdAndDelete(req.params.id);

      if (!deleted) return res.status(404).json({ message: 'Not found' });

      res.json({ message: 'Deleted successfully' });
    } catch (err) { res.status(500).json({ error: err.message }); }
  },
  removeAll: async (req, res) => {
    try {
      await Model.deleteMany({});
      
      res.json({ message: 'All deleted successfully' });
    } catch (err) { res.status(500).json({ error: err.message }); }
  }
});