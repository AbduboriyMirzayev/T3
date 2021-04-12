import styled from "styled-components";

const S = {};

S.Login = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    height:100vh;

  .form {
    width: 100%;
    max-width: 300px;
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
