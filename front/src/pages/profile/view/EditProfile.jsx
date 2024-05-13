import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";

import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getemployee, updateemployee } from "../../../store/empolyee";
import { getclient, updateclient } from "../../../store/client";
export default function EditProfile() {
  const dispatch = useDispatch();
  const myInfo = useSelector((state) => state.auth.me);

  const clientstore = useSelector((state) => state.client.client);
  const employeestore = useSelector((state) => state.employee.employee);
  const userstore = useSelector((state) => state.user.user);
  const [up,setup] = React.useState(0) 

  console.log(employeestore,'this is the store of em')
  console.log(clientstore,'this is the store from client')
  React.useEffect(() => {
    if (!myInfo.isClient) {
      dispatch(getemployee(+myInfo.Employee?.id))
      setData(employeestore)
    } else {
      dispatch(getclient(+myInfo.Client?.id))
      setData(clientstore)
    }
  }, [employeestore?.id,clientstore?.id]);
  function handlechange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }
  const [data, setData] = React.useState({});

  console.log(data,"this iss data");
  const [id, setId] = React.useState(3);

  const navigate = useNavigate();
  async function handleSubmit(e) {
    // console.log(values.photo);
    e.preventDefault();
    if (myInfo.isClient === false) {
      const args = { id: +myInfo.Employee?.id, body: data };

      console.log(data, "ragiiiiiiiiiiiiiiiiiiiiii subb");
      await dispatch(updateemployee(args)).then((res) => {
        if (!res.error) {
          navigate(-1);
        } else {
          alert("eroor");
        }
      });
    } else {
      setId(myInfo.Client?.id);

      const args = { id: +id, body: data };

      await dispatch(updateclient(args)).then((res) => {
        if (!res.error) {
          navigate(-1);
        } else {
          alert("eroor");
        }
      });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ flex: 1, width: "100%" }}>
        <Stack
          spacing={4}
          sx={{
            display: "flex",
            maxWidth: "800px",
            mx: "auto",
            px: { xs: 2, md: 6 },
            py: { xs: 2, md: 3 },
          }}
        >
          <Card>
            <Box sx={{ mb: 1 }}>
              <Typography level="title-md">Edit Profile</Typography>
            </Box>
            <Divider />
            <Stack
              direction="row"
              spacing={3}
              // sx={{ display: { xs: "none", md: "flex" }, my: 1 }}
            >
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={200}
                  sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                >
                  <img src={myInfo.Employee?.photo} loading="lazy" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    left: 100,
                    top: 170,
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <Stack spacing={1}>
                  <FormLabel>Nom</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      size="sm"
                      placeholder="First name"
                      value={data.first_name}
                      name="first_name"
                      onChange={handlechange}
                    />
                  </FormControl>
                  <FormLabel>Prenom</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      size="sm"
                      name="last_name"
                      type="text"
                      placeholder="Last name"
                      onChange={handlechange}
                      value={data.last_name}
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack spacing={1}>
                  <FormLabel>Adresse</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      name="adresse"
                      onChange={handlechange}
                      size="sm"
                      placeholder="adresse"
                      value={data.adresse}
                    />
                  </FormControl>
                  <FormLabel>Numero</FormLabel>
                  <FormControl
                    sx={{
                      display: { sm: "flex-column", md: "flex-row" },
                      gap: 2,
                    }}
                  >
                    <Input
                      size="sm"
                      name="numero"
                      onChange={handlechange}
                      placeholder="numero"
                      value={data.numero}
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel>Role</FormLabel>
                    <Input size="sm" disabled value={myInfo.Employee?.role} />
                  </FormControl>
                </Stack>
                {/* <form>
              <Stack spacing={1}>

                <FormLabel>Email</FormLabel>
                <FormControl
                  sx={{
                    display: { sm: "flex-column", md: "flex-row" },
                    gap: 2,
                  }}
                >
                  <Input
                    size="sm"
                    type="email"
                    placeholder="email"
                    defaultValue={myInfo.email}
                  />
                </FormControl>
                <FormLabel>mot de passe</FormLabel>
                <FormControl
                  sx={{
                    display: { sm: "flex-column", md: "flex-row" },
                    gap: 2,
                  }}
                >
                  <Input
                    size="sm"
                    type="password"
                    placeholder="mot de passe"
                    sx={{ flexGrow: 1 }}
                    />
                    </FormControl>
                <FormLabel>confirmer mot de passe</FormLabel>
                <FormControl
                  sx={{
                    display: { sm: "flex-column", md: "flex-row" },
                    gap: 2,
                  }}
                  >
                  <Input
                    size="sm"
                    type="password"
                    placeholder="confirmer mot de passe"
                    sx={{ flexGrow: 1 }}
                    />
                    </FormControl>
                <button type="submit">change</button>
              </Stack>
              </form> */}
                {/* <Stack   spacing={2} sx={{ flexGrow: 1 }}>
              <form>
                  <FormLabel>Email</FormLabel>
                <FormControl sx={{ flexGrow: 1, gap: 2, }}>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="email"
                    defaultValue={myInfo.Employee?.email}
                    sx={{ flexGrow: 1 }}
                    />
                </FormControl>
              
                    <FormLabel>mot de passe</FormLabel>
                  <FormControl sx={{ display: { sm: "contents" } , gap: 2,}}>
                  <Input
                      size="sm"
                      type="password"
                      placeholder="mot de passe"
                      sx={{ flexGrow: 1 }}
                    />
                    </FormControl>
                    
             
                    <FormLabel>Confirmer mot de passe</FormLabel>
                    <FormControl sx={{ display: { sm: "contents" } }}>
                    <Input
                      size="sm"
                      type="password"
                      placeholder="confirmer mot de passe"
                      sx={{ flexGrow: 1 }}
                    />
                  </FormControl>
                  
              </form>
              </Stack> */}
              </Stack>
            </Stack>
            {/* <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: "flex", md: "none" }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
              <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: "100%" }}
                >
                  <img src={myInfo.Employee?.photo} loading="lazy" alt="" />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: "background.body",
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    left: 85,
                    top: 180,
                    boxShadow: "sm",
                  }}
                >
                  <EditRoundedIcon />
                  </IconButton>
                  </Stack>
                  <Stack spacing={1} sx={{ flexGrow: 1 }}>
                  <FormLabel>Nom</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: "flex-column",
                      md: "flex-row",
                    },
                    gap: 2,
                  }}
                  >
                  <Input
                  size="sm"
                    placeholder="Nom"
                    defaultValue={myInfo.Employee?.first_name}
                  />
                </FormControl>
                <FormLabel>Prenom</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: "flex-column",
                      md: "flex-row",
                    },
                    gap: 2,
                  }}
                >
                  <Input
                    size="sm"
                    placeholder="Prenom"
                    defaultValue={myInfo.Employee?.last_name}
                  />
                </FormControl>
              </Stack>
            </Stack>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input
                size="sm"
                disabled
                type="email"
                defaultValue={myInfo.Employee?.role}
              />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                size="sm"
                type="email"
                startDecorator={<EmailRoundedIcon />}
                placeholder="email"
                defaultValue={myInfo.Employee?.email}
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            <div>
              <FormControl sx={{ display: { sm: "contents" } }}>
                <FormLabel>Adresse</FormLabel>
                <Input
                  size="sm"
                  defaultValue={myInfo.Employee?.adresse}
                  placeholder="adresse"
                ></Input>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ display: { sm: "contents" } }}>
                <FormLabel>Numero</FormLabel>
                <Input
                  size="sm"
                  defaultValue={myInfo.Employee?.numero}
                  placeholder="numero"
                  ></Input>
              </FormControl>
            </div>

            <div>
            <FormControl sx={{ display: { sm: "contents" } }}>
                <FormLabel>Mot de passe</FormLabel>
                <Input
                  size="sm"
                  type="password"
                  placeholder="mot de passe"
                ></Input>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ display: { sm: "contents" } }}>
                <FormLabel>Confirmer mot de passe</FormLabel>
                <Input
                  size="sm"
                  type="password"
                  placeholder="confirmer mot de passe"
                ></Input>
              </FormControl>
            </div>
          </Stack> */}
            <CardOverflow
              sx={{ borderTop: "1px solid", borderColor: "divider" }}
            >
              <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button onClick={handleSubmit} size="sm" variant="solid">
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </Card>
        </Stack>
      </Box>
    </form>
  );
}
