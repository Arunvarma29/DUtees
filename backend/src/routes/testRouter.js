import { Router } from "express";

const router = Router();

router.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Jack was a ripper",
    route: "/api/test",
  });
});

router.get("/status", (req, res) => {
  res.status(200).json({
    success: true,
    app: "dutees",
    status: "ready",
  });
});

export default router;
