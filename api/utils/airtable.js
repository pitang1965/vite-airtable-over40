const Airtable = require('airtable');
Airtable.configure({
  apiKey: process.env.AIRTABLE_SECRET_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_TABLE_NAME);

const getMembers = async () => {
  const formattedMembers = [];
  await table
    .select({
      sort: [{ field: 'Order', direction: 'asc' }],
      filterByFormula: `Name != ''`,
    })
    .eachPage((members, fetchNextPage) => {
      members.forEach((member) => {
        formattedMembers.push({ id: member.id, fields: member.fields });
      });
      fetchNextPage();
      console.log('next');
    });
  return formattedMembers;
};

module.exports = { table, getMembers };
