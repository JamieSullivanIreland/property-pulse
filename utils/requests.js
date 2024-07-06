const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

export async function fetchProperties(page = 1, pageSize = 3) {
  if (!apiDomain) {
    return [];
  }

  const res = await fetch(
    `${apiDomain}/properties?page=${page}&pageSize=${pageSize}`,
    {
      cache: 'no-store',
    }
  );

  try {
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchFeaturedProperties() {
  if (!apiDomain) {
    return [];
  }

  const res = await fetch(`${apiDomain}/properties/featured`, {
    cache: 'no-store',
  });

  try {
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchProperty(id) {
  if (!apiDomain) {
    return null;
  }

  const res = await fetch(`${apiDomain}/properties/${id}`, {
    cache: 'no-store',
  });

  try {
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}
