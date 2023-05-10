import React from "react";
import dayjs from "dayjs";
import styled from "styled-components";

function PostModel(props) {
    const { title, username, created_datetime, content } = props;

    const now = dayjs(Date());
    const date = dayjs(created_datetime);

    const minutes = now.diff(date, "minute");
    const hours = now.diff(date, "hour");
    const days = now.diff(date, "day");
    const months = now.diff(date, "month");
    const years = now.diff(date, "year");

    let minuteString: string;
    minutes !== 1 ? (minuteString = "minutes") : (minuteString = "minute");
    let hourString: string;
    hours !== 1 ? (hourString = "hours") : (hourString = "hour");
    let dayString: string;
    days !== 1 ? (dayString = "days") : (dayString = "day");
    let monthString: string;
    months !== 1 ? (monthString = "months") : (monthString = "month");
    let yearString: string;
    years !== 1 ? (yearString = "years") : (yearString = "year");

    let dateString = `${minutes} ${minuteString} ago`
    hours === 0 ? (dateString = dateString) : (dateString = `${hours} ${hourString} ago`);
    days === 0 ? (dateString = dateString) : (dateString = `${days} ${dayString} ago`);
    months === 0 ? (dateString = dateString) : (dateString = `${months} ${monthString} ago`);
    years === 0 ? (dateString = dateString) : (dateString = `${years} ${yearString} ago`);

    return (
        <PostDiv>
            <TopBar>
                <h1>{title}</h1>
            </TopBar>
            <UserDataBar>
                <h5>{username}</h5>
                <h5>{dateString}</h5>
            </UserDataBar>
            <p>{content}</p>
        </PostDiv>
    )
};

const PostDiv = styled.div`
    border: 1px solid #999999;
    border-radius: 16px;
    margin: 0 24px 24px 24px;
    p {
        padding: 0 24px 24px 24px;
    }
`

const TopBar = styled.div`
    background-color: #7695EC;
    border-radius: 16px 16px 0px 0px;
    padding: 24px;
`

const UserDataBar = styled.div`
    padding: 24px 24px 16px 24px;
    color: #777777;
    display: flex;
    justify-content: space-between;
`

export default PostModel;