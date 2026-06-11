import app from "./app";

const port = Number(process.env.PORT ?? 3030);

app.listen(port, () => {
  console.log(`Hej Home Delivery listening on ${port}`);
});
