import styled from 'styled-components';

const S = {};

S.Home = styled.div`

    width:100%;

    .home__wrapper{
        display:flex;
        justify-content:space-between;
        
        align-items:center;
    }

    .home__btn{
        background:none;
        border:none;
        cursor:pointer;
    }
    
    .home__icon{
        width:35px;
        height:30px;
    }

    .table{
        margin:50px 0;
    }

    .pagination{
        width:100%;
        max-width:400px;
        margin-left:auto;
        display: flex;
        justify-content: flex-end;
    }

    .select{
        width:100%;
        max-width:400px;
        margin-left:auto;
        display:block;
    }

`;


export default S;