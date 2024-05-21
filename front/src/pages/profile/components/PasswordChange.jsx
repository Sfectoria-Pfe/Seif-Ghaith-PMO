import React from "react";
import { useState } from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

function PasswordChange() {
  const [data, setData] = useState({
    ancien: "",
    nouveau: "",
    repeter: "",
  });

  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    if (data.nouveau === data.repeter) {
    } else {
      alert("le mot de passe reper est incorrect !!!!");
    }
  }

  return (
    <Card>
      <Box sx={{ mb: 1 }}>
        <Typography level="title-md">Edit Profile</Typography>
      </Box>
      <Divider />
      <Stack direction="row" spacing={3}>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <Stack spacing={1}>
            <FormLabel>ancien mot de passe</FormLabel>
            <FormControl
              sx={{
                display: { sm: "flex-column", md: "flex-row" },
                gap: 2,
              }}
            >
              <Input
                type="password"
                name="ancien"
                onChange={handlechange}
                size="sm"
                placeholder="ancien mot de passe"
                //   value={data.adresse}
              />
            </FormControl>
            <Divider />

            <FormLabel>Nouveau mot de passe</FormLabel>
            <FormControl
              sx={{
                display: { sm: "flex-column", md: "flex-row" },
                gap: 2,
              }}
            >
              <Input
                type="password"
                size="sm"
                name="nouveau"
                onChange={handlechange}
                placeholder="mot de passe"
                //   value={data.numero}
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <FormLabel>repeter mot de passe</FormLabel>
            <FormControl
              sx={{
                display: { sm: "flex-column", md: "flex-row" },
                gap: 2,
              }}
            >
              <Input
                type="password"
                size="sm"
                name="repeter"
                onChange={handlechange}
                placeholder="numero"
                //   value={data.numero}
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

export default PasswordChange;
