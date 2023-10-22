import { Flex, Stack, Title } from '@mantine/core';

export const DasboardPage = () => {
    return (
      <iframe
        className="h-screen -m-4"
        style={{
          width:  "calc(100% + 32px)",
          height: "calc(100vh - 60px)",
        }}
        src="http://10.9.67.97:3000/public-dashboards/b92ea8887dc341a19e998b514569903a?orgId=1&theme=light"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    );
}