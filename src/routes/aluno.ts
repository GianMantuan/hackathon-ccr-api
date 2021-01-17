import { Router } from "express";

import AlunoController from "../controllers/AlunoController";

const router = Router();

const alunoController = new AlunoController();

router.get("/", alunoController.all);
router.post("/", alunoController.add);
router.put("/:id",alunoController.update);
router.get("/:id", alunoController.findAluno);
router.delete("/:id", alunoController.delete);

export default router;
