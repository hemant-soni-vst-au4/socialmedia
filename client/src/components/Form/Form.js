import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./style";
import FileBase from "react-file-base64";

function Form() {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectFile: "",
  });

  const handleSubmit = () => {};

  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          value={postData.creator}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.creator}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          value={postData.creator}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          value={postData.creator}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
