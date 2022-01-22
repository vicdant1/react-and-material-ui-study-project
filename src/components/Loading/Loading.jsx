import { Box, CircularProgress } from '@material-ui/core'

const Loading = () => {
  return(
    <Box display="flex" alignItems="center" justifyContent="center" position="absolute" width="100%" height="100vh" top={0} left={0}>
      <CircularProgress color='secondary' />
    </Box>
  )
}

export default Loading;
