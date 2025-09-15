import createApp from './app';

const server = createApp()

const port = process.env.PORT;


server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});