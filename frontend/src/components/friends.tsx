import { MenuItem } from "@blueprintjs/core";
import { ItemPredicate, ItemRenderer } from "@blueprintjs/select";
import React from "react";

export interface IFriend {
    first: string;
    last: string;
    nickname: string;
  }

export const groupMembers: IFriend[] = [
    { first: "Alex", last: "Liu", nickname: "Steven Hawking" },
    { first: "Ryan", last: "Chen", nickname: "Navy Reject" },
    { first: "Jon", last: "Lin", nickname: "Nil Nahtanoj" },
    { first: "John", last: "Kim", nickname: "225 lbs & 4" },
    { first: "Joe", last: "Pak", nickname: "Glizzy" },
    { first: "Jimin", last: "Son", nickname: "Yau Me" },
    { first: "Kevin", last: "Chen", nickname: "Genetic Mistake" },
    { first: "Taewon", last: "Kim", nickname: "Hardstuck D4" },
    { first: "Andrew", last: "Yan", nickname: "Free Trial Is Over" },
    { first: "Jeffrey", last: "Yi", nickname: "Beff Bunior" },
    { first: "Young", last: "Kang", nickname: "Danny's Bitch" },
    { first: "Yeon Jun", last: "Kim", nickname: "Washed Up CS Player" },
    { first: "Danny", last: "Ye", nickname: "Simp for Megan" },
    { first: "William", last: "Lee", nickname: "Coochie_Mane" },
    { first: "Adam", last: "Chin", nickname: "Anime Girl" },
]


export const renderFriend: ItemRenderer<IFriend> = (
  friend,
  { handleClick, modifiers, query }
) => {
  if (!modifiers.matchesPredicate) {
    return null;
  }
  const text = `${friend.first} ${friend.last}`;
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      label={friend.nickname}
      key={friend.first + " " + friend.last}
      onClick={handleClick}
      text={highlightText(text, query)}
    />
  );
};

export const filterFriend: ItemPredicate<IFriend> = (query, friend) => {
  const word = `${friend.first} ${friend.last} ${friend.nickname}`;
  return (
    word.toLowerCase().indexOf(
      query.toLowerCase()
    ) >= 0
  );
};

function highlightText(text: string, query: string) {
  let lastIndex = 0;
  const words = query
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map(escapeRegExpChars);
  console.log(words);
  console.log(query);
  if (words.length === 0) {
    return [text];
  }
  const regexp = new RegExp(words.join("|"), "gi");
  const tokens: React.ReactNode[] = [];
  while (true) {
    const match = regexp.exec(text);
    if (!match) {
      break;
    }
    const length = match[0].length;
    const before = text.slice(lastIndex, regexp.lastIndex - length);
    if (before.length > 0) {
      tokens.push(before);
    }
    lastIndex = regexp.lastIndex;
    tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
  }
  const rest = text.slice(lastIndex);
  if (rest.length > 0) {
    tokens.push(rest);
  }
  return tokens;
}

function escapeRegExpChars(text: string) {
  return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

export const friendSelectProps = {
  itemPredicate: filterFriend,
  itemRenderer: renderFriend,
  items: groupMembers
};
