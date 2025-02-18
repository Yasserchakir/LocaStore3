const jwt = require("jsonwebtoken");
module.exports = (roles = []) => {
    return (req, res, next) => {
        const token = req.header("Authorization");
        if (!token) return res.status(401).json({ msg: "Accès refusé" });
        try {
            const decoded = jwt.verify(token, "secret_key");
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({ msg: "Accès interdit" });
            }
            req.user = decoded;
            next();
        } catch (err) {
            res.status(401).json({ msg: "Token invalide" });
        }
    };
};
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
router.get("/admin-dashboard", authMiddleware(["admin"]), (req, res) => {
    res.json({ msg: "Bienvenue sur le tableau de bord administrateur !" });
});

module.exports = router;
