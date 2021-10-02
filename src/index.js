const app = require('./core/app');
require('dotenv').config();

const DeveloperRoutes = require('./routes/DeveloperRoutes');
app.use('/developers', DeveloperRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log('API running.')
});