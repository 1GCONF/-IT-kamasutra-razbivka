import styled from "styled-components"
const DialogItem = styled.div`

`;
export default function Dialogs(props) {
  return (
    <DialogItem>${props.name}</DialogItem>
  )
}
