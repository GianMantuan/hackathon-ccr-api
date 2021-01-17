import { Router } from "express";

import AlunoController from "../controllers/AlunoController";

const router = Router();

const alunoController = new AlunoController();

router.get("/", alunoController.all);
router.get('/:id/empresas', alunoController.empresas)
router.get("/:id", alunoController.findAluno);
router.post("/", alunoController.add);
router.put("/:id",alunoController.update);
router.delete("/:id", alunoController.delete);

export default router;
