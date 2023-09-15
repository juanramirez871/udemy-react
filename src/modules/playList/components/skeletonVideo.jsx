import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonColor() {
    return (
        <Skeleton
            sx={{ bgcolor: 'grey.900', borderRadius: "10px" }}
            variant="rectangular"
            width="100%"
            height="500px"
        />
    );
}
