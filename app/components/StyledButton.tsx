"use client";

import React from "react";
import { Button } from "@mui/material";

const StyledButton = () => {
    return (
        <div>
            <Button
                sx={{
                    backgroundColor: "#2196F3",
                    fontSize: 15,
                    fontWeight: 500,
                    padding: "8px 22px",
                }}
                variant="contained">
                ИСКАТЬ
            </Button>
        </div>
    );
};

export default StyledButton;
