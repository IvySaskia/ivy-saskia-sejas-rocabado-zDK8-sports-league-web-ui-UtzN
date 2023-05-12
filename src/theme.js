import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  components: {
    Table: {
      baseStyle: {
        tr: {
          th: {
            background: "#E4EDF2",
            color: "#182C62",
            height: "40px",
            textTransform: "capitalize"
          },
          borderColor: "#E4EDF2",
          color: "#4B5C68",
          fontSize: "14px",
          td: {
            height: "70px"
          },
        },
      },
      variants: {
        'customStriped': {
          tr: {
            _even: {
              background: "#F6F7F7",
            },
            _odd: {
              background: "white",
            }
          }
        }
      }, 

    },
  },
})

export default theme