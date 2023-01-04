import React, { useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select2 } from "@blueprintjs/select";
import { H3, Card } from "@blueprintjs/core";
import { filterFriend, renderFriend, IFriend, groupMembers } from "./friends";

const FriendSelect = Select2.ofType<IFriend>();

export const SelectExample: React.FC = () => {
  const [friend, setFriend] = useState<IFriend>(groupMembers[0]);
  return (
    <Card className="data-input-card">
      <H3>{"What is your name?"}</H3>
      <FriendSelect
        items={groupMembers}
        itemPredicate={filterFriend}
        itemRenderer={renderFriend}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={setFriend}
        className="friend-select"
      >
        <Button text={friend.first} rightIcon="caret-down" />
      </FriendSelect>
    </Card>
  );
};
