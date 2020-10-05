export const configuration = () => ({
  envrionment: process.env.NODE_ENV,
  port: parseInt(process.env.port || '3000', 10),
})
