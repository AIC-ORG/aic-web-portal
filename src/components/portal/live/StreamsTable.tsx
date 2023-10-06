import { IStream } from '@/types/stream.type';
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Button,
} from '@tremor/react';
import { FC } from 'react';
import { BiDotsVerticalRounded, BiRadar, BiShare } from 'react-icons/bi';

interface StreamsTableProps {
  data: IStream[];
}

const StreamsTable: FC<StreamsTableProps> = ({ data }) => (
  <Card>
    {/* <Title>List of Swiss Federal Councillours</Title> */}
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Created</TableHeaderCell>
          <TableHeaderCell>Scheduled</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Share</TableHeaderCell>
          <TableHeaderCell>Action</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center gap-2 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.thumbnail} alt="" className=" rounded-full h-14 w-14 object-cover" />
                <div className="flex flex-col gap-y-1">
                  <p className=" text-base opacity-70 font-semibold">Dancing ith the stars</p>
                  <Badge color="gray">{item.status}</Badge>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Text>{new Date(item.createdAt).toDateString()}</Text>
            </TableCell>
            <TableCell>
              <Text>{new Date(item.scheduled).toDateString()}</Text>
            </TableCell>
            <TableCell>
              <Badge className=" bg-black text-white">{item.status}</Badge>
            </TableCell>
            <TableCell>
              <button className="flex items-center gap-2">
                <BiShare />
                Share
              </button>
            </TableCell>
            <TableCell>
              <button>
                <BiDotsVerticalRounded size={30} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default StreamsTable;
