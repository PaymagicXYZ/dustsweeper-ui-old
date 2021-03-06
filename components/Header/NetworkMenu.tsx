import {
  Button,
  Spacer,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuGroup,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
  Image,
  Flex,
} from "@chakra-ui/react";
import { SmallCloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useWeb3React } from "@web3-react/core";
import { translateChainId } from "../../utils";
import { switchNetwork } from "../../utils";

const NetworkMenu = () => {
  const context = useWeb3React();
  const { account, activate, chainId, deactivate, library } = context;

  if (!chainId) return null;

  const WrongNetworkButton = () => {
    return (
      <MenuButton
        as={Button}
        colorScheme="red"
        onClick={() => switchToNetwork(library, 1)}
      >
        Wrong Network. Switch to Mainnet
      </MenuButton>
    );
  };

  return (
    <Menu>
      {chainId == 1 || chainId == 1337 ? (
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          borderRadius="xl"
          backgroundColor="purple.100"
          _hover={{
            bg: "purple.400",
          }}
          _active={{
            bg: "purple.400",
          }}
        >
          {translateChainId(chainId)}
        </MenuButton>
      ) : (
        <WrongNetworkButton />
      )}
    </Menu>
  );
};

export default NetworkMenu;
