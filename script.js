

// get a specific board and
// let allBoards, list;

const urls = {
  getAllBoards: `${domain}/1/members/me/boards?${apiAccess}`,
  getAllLists: function(boardId) {
    return `${domain}/1/boards/${boardId}/lists?cards=none&card_fields=all&filter=open&fields=all&${apiAccess}`;
  },
  getAllCards: function(listId) {
    return `${domain}/1/lists/${listId}/cards?${apiAccess}`;
  },
  getAllContents: ""
};

// gets all Boards
const getsAllBoardsFunc = async function() {
  const boards = await fetch(urls.getAllBoards).then(cur => cur.json());
  console.log(boards);
  return boards;
};
// getsAllBoardsFunc();

// get all lists
const getAllLists = async function(board) {
  let allBoards = await getsAllBoardsFunc();
  const boardLists = await fetch(
    urls.getAllLists(allBoards[board]["id"])
  ).then(lists => lists.json());
  console.log(boardLists);
  return boardLists;
};

// getAllLists(1);

// get all cards in a list
const getAllCards = async function() {
  let lists = await getAllLists(1);
  const cards = await fetch(urls.getAllCards(lists[2]["id"])).then(cards =>
    cards.json()
  );
    let namesOfCards = cards.map(card => card['name'])
//   console.log(cards);
  console.log(namesOfCards);
};

getAllCards();
