import { Pagination, Stack, Table } from '@mantine/core';
import { ErrorInstance } from '../models/errorInstance';
import { DateTime } from 'luxon';

export const ErrorProps = {
  
}

const formatDate = (date: Date) => {
  return DateTime.fromJSDate(date).toFormat('dd.mm.yyyy HH:MM:ss')
}

export const ErrorInstancesTable = () => {
  const errorInstances: ErrorInstance[] = [
    {
      error_uid: "1",
      error_id: "57678694994",
      date: new Date("04 Dec 1995 00:12:00 GMT"),
      log: "Kaluga workflowId: a92fd3f8-4318-4b37-a367-790f4288f2c1, Unable to get workflow documents, SessionId: 8d705d9e-bf21-46b7-a4fd-00829e75a704",
    },
    {
      error_uid: "2",
      error_id: "57678694994",
      date: new Date("04 Dec 1995 00:12:00 GMT"),
      log: "Unable to get integration token",
    },
    {
      error_uid: "3",
      error_id: "57678694994",
      date: new Date("04 Dec 1995 00:12:00 GMT"),
      log: "Could not execute query: SELECT sum(this_.RubSum) as y0_, count(this_.Id) as y1_, YEAR(ConclusionDate) As [Year], Month(ConclusionDate) As [Month], convert(datetime, '1.'+convert(varchar,month(ConclusionDate))+'.'+convert(varchar,year(ConclusionDate)), 104) as [MonthYear], this_.ContractStateId as y5_, this_.ExternalSystemId as y6_, company1_.IsSmallBusiness as y7_, case when this_.id is null then case when Substring(inn,1,2) = '77' then '77' when Substring(inn,1,2) = '50' then '50' else 'XX' end else SUBSTRING(region3_.code, 1, 2) end as RegionCode FROM Contract this_ inner join Company company1_ on this_.BuyerId=company1_.Id left outer join Region region3_ on company1_.RegionId=region3_.Id inner join Supplier supplier2_ on this_.SupplierId=supplier2_.Id WHERE ((this_.ContractStateId = @p0 or this_.ContractStateId = @p1) or this_.ContractStateId = @p2) and ((this_.EntityState = @p3 and this_.Deleted = @p4) and not (this_.ConclusionDate is null)) GROUP BY YEAR(ConclusionDate), Month(ConclusionDate), convert(datetime, '1.'+convert(varchar,month(ConclusionDate))+'.'+convert(varchar,year(ConclusionDate)), 104), this_.ContractStateId, this_.ExternalSystemId, company1_.IsSmallBusiness, case when this_.id is null then case when Substring(inn,1,2) = '77' then '77' when Substring(inn,1,2) = '50' then '50' else 'XX' end else SUBSTRING(region3_.code, 1, 2) end",
    },
  ];

  const rows = errorInstances.map((error) => (
    <Table.Tr key={error.error_uid}>
      <Table.Td className="!whitespace-nowrap">{error.error_id}</Table.Td>
      <Table.Td className="!whitespace-nowrap">
        {formatDate(error.date)}
      </Table.Td>
      <Table.Td className="!break-all">{error.log}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack gap="sm">
      <Pagination total={10} withEdges />
      <Table className="!max-w-full">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>Дата</Table.Th>
            <Table.Th>Лог</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Stack>
  );
}