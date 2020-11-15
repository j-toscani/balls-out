// Default export does not work. Has to be written this way
// https://stackoverflow.com/questions/57635797/es6-module-mongoose-has-no-default-export
import * as mongoose from "mongoose";

mongoose.set("returnOriginal", false);

const startDB = (url: string) => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB did not connect"));
};

export default startDB;
