import {
  Grid,
  Box,
  Text,
  TextArea,
  Stack,
  Button,
  TextInput,
} from "@mantine/core";
import { margin } from "@mui/system";
import React, { useState } from "react";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      fetch("http://localhost:5000/api/videos/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            // File uploaded successfully
            console.log("File uploaded successfully");
          } else {
            // Error occurred during file upload
            console.error("Error uploading file");
          }
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  const [value, setValue] = useState("");

  return (
    <>
      <Grid className="bg-black px-40 pt-10 rounded-b-lg flex items-center justify-center h-screen">
        <Box className="bg-white h-1/2 p-4 rounded-lg">
          <Text className="font-bold">Find Video from Local</Text>
          <Stack>
            <input type="file" onChange={handleFileChange} className="mt-4" />
            <TextInput
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              label="Description"
              placeholder="Description"
            />
            <Button
              onClick={handleUpload}
              disabled={!selectedFile}
              className="bg-black"
            >
              Upload
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default UploadPage;
