// import Realm from 'realm';

// // Declare Schema
// class BookSchema extends Realm.Object {}
// BookSchema.schema = {
//   name: 'Book',
//   properties: {
//     title: 'string',
//     pages: 'int',
//     edition: 'int?',
//   },
// };

// // Create realm
// let realm = new Realm({schema: [BookSchema], schemaVersion: 1});

// // Functions
// let getAllBooks = () => {
//   return realm.objects('Book');
// };

// let addBook = (_title, _pages, _edition = null) => {
//   realm.write(() => {
//     const book = realm.create('Book', {
//       title: _title,
//       pages: _pages,
//       edition: _edition,
//     });
//   });
// };

// let deleteAllBooks = () => {
//   realm.write(() => {
//     realm.delete(getAllBooks());
//   });
// };

// // Export the realm
// export default realm;

// // Export other functions
// export {getAllBooks, addBook, deleteAllBooks};
