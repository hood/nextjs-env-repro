export function foo(calledBy: "parent" | "child") {
  return `Called by: ${calledBy} -> MOCK_ENV_VAR=${process.env.MOCK_ENV_VAR} | NEXT_PUBLIC_MOCK_ENV_VAR=${process.env.NEXT_PUBLIC_MOCK_ENV_VAR}`;
}
