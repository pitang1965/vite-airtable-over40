const Airtable = require('airtable');
Airtable.configure({
  apiKey: process.env.AIRTABLE_SECRET_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);
const members_t = base(process.env.AIRTABLE_MEMBERS_T);
const workshops_t = base(process.env.AIRTABLE_WORKSHOPS_T);

const getMembers = async () => {
  const formattedMembers = [];
  await members_t
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

const getWorkshops = async () => {
  const formattedMembers = [];
  await workshops_t
    .select({
      sort: [{ field: 'Date', direction: 'asc' }],
      filterByFormula: `Name != ''`,
    })
    .eachPage((workshops, fetchNextPage) => {
      workshops.forEach((workshop) => {
        formattedMembers.push({ id: workshop.id, fields: workshop.fields });
      });
      fetchNextPage();
      console.log('next');
    });
  return formattedMembers;
};

module.exports = { members_t, getMembers, getWorkshops };
