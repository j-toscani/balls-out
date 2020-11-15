import mongoose from "mongoose";

mongoose.set("returnOriginal", false);

const startDB = (url: string) => {
  const connected = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return connected;
};

export default startDB;
