import React, { useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select2, MultiSelect2 } from "@blueprintjs/select";
import { H3, Card } from "@blueprintjs/core";
import { filterFriend, renderFriend, IFriend, groupMembers } from "./friends";
import "../css/App.css"

const FriendSelectSingle = Select2.ofType<IFriend>();
const FriendSelectMultiple = MultiSelect2.ofType<IFriend>();

const renderTag = (friend: IFriend) => friend.first;

function addFriend(item: IFriend, list: IFriend[], self: IFriend) {
  let equal:Boolean = self.first === item.first && self.last === item.last;
  let contains:Boolean = false;
  list.forEach((value) => {if (value.first === item.first && value.last === item.last) contains = true});
  if (!equal && !contains) list.push(item);
  return list;
}

function removeFriend(item: IFriend, list: IFriend[]) {
  list.forEach((value, i) => {if (value.first === item.first && value.last === item.last) delete list[i]});
  return list;
}

export const SelectExample: React.FC = () => {
  const [friendSingle, setFriendSingle] = useState<IFriend>(groupMembers[0]);
  const [friendsMultiple, setFriendMultiple] = useState<IFriend[]>([]);

  return (
    <Card className="data-input-card">
      <H3>{"What is your name?"}</H3>
      <FriendSelectSingle
        items={groupMembers}
        itemPredicate={filterFriend}
        itemRenderer={renderFriend}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={item => {setFriendSingle(item); setFriendMultiple([]);}}
        className="input-field"
      >
        <Button text={friendSingle.first} rightIcon="caret-down" />
      </FriendSelectSingle>
      <br/>
      <H3>{"Who did you hang out with?"}</H3>
      <FriendSelectMultiple
        itemPredicate={filterFriend}
        itemRenderer={renderFriend}
        items={groupMembers}
        onItemSelect={item => setFriendMultiple(addFriend(item, friendsMultiple, friendSingle))}
        tagRenderer={renderTag}
        selectedItems={friendsMultiple}
        onRemove={item => setFriendMultiple(removeFriend(item, friendsMultiple))}
        className="input-field"
      />
      <br/>
      <Button>
        {"Submit"}
      </Button>
    </Card>
  );
};
