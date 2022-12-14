// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'



const customColors = {
    dark: false,
    colors: {
        background: '#1E293B',
        surface: '#334155',
        primary: '#334155',
        'primary-darken-1': '#3700B3',
        secondary: '#03DAC6',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#536278',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

export default createVuetify(
    {
        theme:{
            defaultTheme:'customColors' ,
            themes:{
                customColors
            }
        }
    }
)