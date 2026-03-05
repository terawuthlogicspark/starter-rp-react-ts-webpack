import React from "react";
import {
  RPProvider,
  RPLayout,
  RPPages,
  RPProviderProps,
  RPLayoutProps,
} from "@react-pdf-kit/viewer";

interface Props {
  showToolbar?: boolean;
  providerProps?: RPProviderProps;
  defaultLayoutProps?: RPLayoutProps;
}

export const AppPDFViewer = (props: Props) => {
  const { showToolbar = true, providerProps, defaultLayoutProps } = props;

  return (
    <RPProvider
      src="https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf"
      {...providerProps}
    >
      {showToolbar ? (
        <RPLayout toolbar {...defaultLayoutProps}>
          <RPPages />
        </RPLayout>
      ) : (
        <div style={{ width: "100%", height: "550px" }}>
          <RPPages />
        </div>
      )}
    </RPProvider>
  );
};
