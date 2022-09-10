import {
  ChangeEvent,
  FunctionComponent,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useMemo,
} from "react";
import { DrawsResult } from "../__typescript/draw";

type Props = PropsWithChildren<{
  drawResult: DrawsResult;
  updateDrawResult: Dispatch<SetStateAction<DrawsResult | null>>;
  types: {
    name: string;
    value: string;
  }[];
}>;

const Filter: FunctionComponent<Props> = ({
  types,
  drawResult,
  updateDrawResult,
}) => {
  const initialResult = useMemo(() => drawResult, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const newResult = { ...initialResult };

    if (value === "balls") {
      delete newResult.stars;
    } else if (value === "stars") {
      delete newResult.balls;
    }

    updateDrawResult(newResult);
  };

  return (
    <div className="flex flex-row gap-x-4 mt-4 lg:mt-0">
      <div className="flex items-center mb-4">
        <input
          defaultChecked
          id={`radio_all`}
          type="radio"
          value=""
          name="filter"
          onChange={handleChange}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          htmlFor="radio_all"
        >
          Tous
        </label>
      </div>

      {types.map(({ name, value }) => (
        <div className="flex items-center mb-4" key={name}>
          <input
            id={`radio_${name.trim()}`}
            type="radio"
            value={value}
            name="filter"
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor={`radio_${name.trim()}`}
          >
            {name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
