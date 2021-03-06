import styled from "styled-components";

const S = {};

S.Login = styled.div`
    max-width: 300px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    height:100%;

  .form {
    width: 100%;
  }

  .form__input{
      margin-top:10px;
  }
  .form__btn{
      width:100%;
  }

  .form__err-message{
      color:red;
      font-size:14px;
      display:none;
  }

  .form__err-message--active{
      display:block;
  }
`;

export default S;
