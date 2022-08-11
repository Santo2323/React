import {Pagination } from "@mui/material";

const Paginado = ({page, count, onChange}) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", }}>
            <Pagination count={count} page= {page} onChange={onChange} variant="outlined" shape="rounded" sx={{ marginBottom: 10 }}/>
        </div>
    );
};
export default Paginado;