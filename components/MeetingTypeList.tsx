'use client';

import { useState } from 'react';
import HomeCard from './HomeCard';
import { useRouter } from 'next/navigation';

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isSchedulMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClick={() => setMeetingState('isSchedulMeeting')}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="join Meeting"
        description="via invitation link"
        handleClick={() => setMeetingState('isJoiningMeeting')}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
