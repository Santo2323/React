import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop:"150px" }}>
        <CircularProgress size='15rem' role='progressbar'/>
    </div>
        );
};

export default Loading;
