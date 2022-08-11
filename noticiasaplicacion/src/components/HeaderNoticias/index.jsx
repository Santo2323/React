import { AppBar, Typography, Toolbar } from "@mui/material";

const HeaderNoticias = () => {
    
    return (
        <div role='headernoticias'>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h6">
                        Logo
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        
        
    );

};

export default HeaderNoticias;