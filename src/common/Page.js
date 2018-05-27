import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles'

export default withTheme()(styled.section`
  padding: ${({theme}) => theme.spacing.unit * 2 }px;
`)
