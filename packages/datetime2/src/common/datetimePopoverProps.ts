/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { DefaultPopover2TargetHTMLProps, Popover2, Popover2Props } from "@blueprintjs/popover2";

/**
 * Reusable collection of props for components in this package which render a `Popover2`
 * and need to provide some degree of customization for that popover.
 */
export interface DatetimePopoverProps {
    /**
     * Props to spread to `Popover2`.
     */
    popoverProps?: Partial<
        Omit<
            Popover2Props,
            "autoFocus" | "content" | "defaultIsOpen" | "disabled" | "enforceFocus" | "fill" | "renderTarget"
        >
    >;

    /**
     * Optional ref for the Popover2 component instance.
     * This is sometimes useful to reposition the popover.
     *
     * Note that this is defined as a specific kind of Popover2 which should be compatible with
     * most use cases, since it uses the default target props interface.
     */
    popoverRef?: React.RefObject<Popover2<DefaultPopover2TargetHTMLProps>>;
}
