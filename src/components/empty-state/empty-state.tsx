import {
  As,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Icon,
  Text,
} from "@chakra-ui/react";
import { Info } from "lucide-react";
import { ReactNode } from "react";

type EmptyStateProps = CardProps & {
  message?: string;
  icon?: As;
  action?: ReactNode;
};

export const EmptyState = ({
  message,
  icon,
  action,
  ...props
}: EmptyStateProps) => {
  return (
    <Card
      align="center"
      {...props}
      variant="outline"
      borderColor="gray.300"
      boxShadow="sm"
    >
      <CardHeader>
        <Icon as={icon || Info} boxSize={20} color="green" />
      </CardHeader>
      <CardBody pt={0}>
        <Text fontWeight="medium" fontSize="xl">
          {message || "Tidak ada data yang ditampilkan disini"}
        </Text>
      </CardBody>
      {action && <CardFooter>{action}</CardFooter>}
    </Card>
  );
};
