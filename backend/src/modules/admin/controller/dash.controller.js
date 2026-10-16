import dashboard from "../services/dash.services.js";

async function dashboardController(req, res) {
  const dash = await dashboard();
  if (!dash) {
    return res.status(400).json("error");
  }
  return res.status(200).json(dash);
}
export default dashboardController;
