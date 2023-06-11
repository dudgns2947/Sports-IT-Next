import { useUser } from "@component/libs/mock/users";

interface UserProfileProps {
  userId: string;
}

export const UserProfile = ({ userId }: UserProfileProps) => {
  const { user, isLoading, isError } = useUser(userId);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="text-[.6em] font-medium leading-none">{user?.name}</div>
          <div className="text-[.6em] text-[#AEAEAE]">{user?.email}</div>
        </div>
      </div>
    </>
  );
};
