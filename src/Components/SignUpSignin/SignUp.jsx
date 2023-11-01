import { Grid, Stack, Typography } from '@mui/material';
import signup1 from '/image/signup1.png'
import SignupForm from './Form/SignupForm.jsx'


const SignUp = () => {

    return <>
        <Stack width='100vw' maxHeight="100vh" maxWidth='auto'>
            <Grid container spacing={0} >
                <Grid item xs={12} md={6}>


                    <div className=''
                        style={{


                            backgroundColor: '#F3F5F7',
                            height: 'auto',
                            width: '100%'
                        }}
                    >
                        <Typography variant='h6' align='center' fontWeight='bold' padding={3}> 3legant</Typography>
                        <img style={{ height: 'auto', width: '100%' }} src={signup1} alt="" />
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <SignupForm />
                </Grid>
            </Grid>
        </Stack>
    </>

}

export default SignUp