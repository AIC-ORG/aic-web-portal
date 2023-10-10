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
import Link from 'next/link';
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
                <img
                  src={item.thumbnail ?? '/images/wayz.jpeg'}
                  alt=""
                  className=" rounded-full h-14 w-14 object-cover"
                />
                <div className="flex flex-col min-w-[150px] md:min-w-fit gap-y-1">
                  <Link href={`/portal/live/${item.roomId}`}>
                    <Text className=" text-base opacity-70 font-semibold">{item.title}</Text>
                  </Link>
                  <Badge color="gray">{item.status}</Badge>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Text>{new Date(item.createdAt).toDateString()}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.scheduledAt ? new Date(item.scheduledAt).toDateString() : 'N/A'}</Text>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Badge className=" bg-black text-white">{item.status}</Badge>
                {['LIVE', 'UPCOMING'].includes(item.status) && <Button>Enter stream</Button>}
              </div>
            </TableCell>
            <TableCell>
              <button className="flex items-center gap-2">
                <BiShare />
                Share
              </button>
            </TableCell>
            <TableCell>
              {item.status !== 'PENDING' ? (
                <button>
                  <BiDotsVerticalRounded size={30} />
                </button>
              ) : (
                <Link href={`/portal/live/${item.roomId}`}>
                  <Button className=" truncate flex items-center">
                    <span className=" flex gap-x-2 items-center">
                      <BiRadar />
                      Go Live
                    </span>
                  </Button>
                </Link>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default StreamsTable;
